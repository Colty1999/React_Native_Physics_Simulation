import { Ball } from "./Renderer";
import Matter from "matter-js";
import { LayoutAnimation } from "react-native";

let boxIds = 0;

const distance = ([x1, y1]: [x1: any, y1: any], [x2, y2]: [x2: any, y2: any]) =>
  Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));


// let now = Date.now();
// const Physics = function (state: any,
//   { touches, time }: { touches: any; time: any }) {
//   let engine = state["physics"].engine;
//   setInterval(() => {
//     // Matter.Engine.update(engine, Date.now() - now);
//     now = Date.now();
//   }, 0);
// }

// let engine = entities.physics.engine;



const Physics = (
  state: any,
  { touches, time }: { touches: any; time: any }
) => {
  // let now = Date.now();
  // setInterval(() => {
  //   Matter.Engine.update(state["physics"].engine, Date.now() - now);
  //   now = Date.now();

  // }, 0);
  let engine = state["physics"].engine;
  // for (let i = 0; i < 100; i += 1) {
  //   Matter.Engine.update(engine, time.delta / 100);
  // }

  Matter.Engine.update(engine, time.delta);

  return state;
}

const CreateBox = (
  state: any,
  { touches, screen }: { touches: any; screen: any }
) => {
  let world = state["physics"].world;
  let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.025);

  touches.filter((t: any) => t.type === "press").forEach((t: any) => {
    let body = Matter.Bodies.circle(
      t.event.pageX,
      t.event.pageY,
      boxSize / 2,
      { frictionAir: 0.021 }
    );
    Matter.World.add(world, [body]);

    state[++boxIds] = {
      body: body,
      size: [boxSize, boxSize],
      color: boxIds % 2 == 0 ? "pink" : "#B8E986",
      renderer: Ball,
    };
  });

  return state;
};

const MoveBox = (state: any, { touches }: { touches: any }) => {
  let constraint = state["physics"].constraint;

  //-- Handle start touch
  let start = touches.find((x: any) => x.type === "start");

  if (start) {
    let startPos = [start.event.pageX, start.event.pageY];

    let boxId = Object.keys(state).find((key) => {
      let body = state[key].body;

      return (
        body && distance([body.position.x, body.position.y], [start.event.pageX, start.event.pageY]) < 25
      );
    });

    if (boxId) {
      constraint.pointA = { x: startPos[0], y: startPos[1] };
      constraint.bodyB = state[boxId].body;
      constraint.pointB = { x: 0, y: 0 };
      constraint.angleB = state[boxId].body.angle;
    }
  }

  //-- Handle move touch
  let move = touches.find((x: any) => x.type === "move");

  if (move) {
    constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
  }

  //-- Handle end touch
  let end = touches.find((x: any) => x.type === "end");

  if (end) {
    constraint.pointA = null;
    constraint.bodyB = null;
    constraint.pointB = null;
  }

  return state;
};

const CleanBoxes = (
  state: any,
  { touches, screen }: { touches: any; screen: any }
) => {
  let world = state["physics"].world;

  Object.keys(state)
    .filter(
      (key) => state[key].body && state[key].body.position.y > screen.height * 2
    )
    .forEach((key) => {
      Matter.Composite.remove(world, state[key].body);
      delete state[key];
    });

  return state;
};

export { Physics, CreateBox, MoveBox, CleanBoxes };
