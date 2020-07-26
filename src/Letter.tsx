import React, { useEffect, useState } from "react";

interface Props {
  readonly letter: string;
}

type TetrominoData = {
  tetromino: any;
  rotation: number;
  x: number;
  y: number;
};

type XY = { x: number; y: number };
interface PieceProps {
  offset: XY;
  rotation?: number;
}
const pieceMap: Record<string, any> = {
  IBlock: ({ offset, rotation }: PieceProps) => (
    <g
      width="16"
      height="64"
      fill="none"
      transform={`translate(${offset.x}, ${offset.y}) rotate(${rotation || 0})`}
    >
      <rect
        x="0.5"
        y="48.5"
        width="15"
        height="15"
        fill="green"
        stroke="black"
      />
      <rect
        x="0.5"
        y="32.5"
        width="15"
        height="15"
        fill="green"
        stroke="black"
      />
      <rect
        x="0.5"
        y="16.5"
        width="15"
        height="15"
        fill="green"
        stroke="black"
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        fill="green"
        stroke="black"
      />
    </g>
  ),
  JBlock: ({ offset, rotation }: PieceProps) => (
    <g
      width="48"
      height="32"
      fill="none"
      transform={`translate(${offset.x}, ${offset.y}) rotate(${rotation || 0})`}
    >
      <rect
        x="16.5"
        y="16.5"
        width="15"
        height="15"
        fill="pink"
        stroke="black"
      />
      <rect
        x="32.5"
        y="16.5"
        width="15"
        height="15"
        fill="pink"
        stroke="black"
      />
      <rect x="0.5" y="0.5" width="15" height="15" fill="pink" stroke="black" />
      <rect
        x="0.5"
        y="16.5"
        width="15"
        height="15"
        fill="pink"
        stroke="black"
      />
    </g>
  ),
  LBlock: ({ offset, rotation }: PieceProps) => {
    if (Math.abs(rotation || 0) === 180) {
      offset.x += 3 * 16;
      offset.y += 2 * 16;
    }
    return (
      <g
        width="48"
        height="32"
        fill="none"
        transform={`translate(${offset.x}, ${offset.y}) rotate(${
          rotation || 0
        })`}
      >
        <rect
          x="15.5"
          y="16.5"
          width="15"
          height="15"
          transform="rotate(90 15.5 16.5)"
          fill="blue"
          stroke="black"
        />
        <rect
          x="31.5"
          y="16.5"
          width="15"
          height="15"
          transform="rotate(90 31.5 16.5)"
          fill="blue"
          stroke="black"
        />
        <rect
          x="47.5"
          y="16.5"
          width="15"
          height="15"
          transform="rotate(90 47.5 16.5)"
          fill="blue"
          stroke="black"
        />
        <rect
          x="47.5"
          y="0.5"
          width="15"
          height="15"
          transform="rotate(90 47.5 0.5)"
          fill="blue"
          stroke="black"
        />
      </g>
    );
  },
  TBlock: ({ offset, rotation }: PieceProps) => (
    <g
      width="48"
      height="32"
      fill="none"
      transform={`translate(${offset.x}, ${offset.y}) rotate(${rotation || 0})`}
    >
      <rect
        x="16.5"
        y="16.5"
        width="15"
        height="15"
        fill="red"
        stroke="black"
      />
      <rect
        x="32.5"
        y="16.5"
        width="15"
        height="15"
        fill="red"
        stroke="black"
      />
      <rect x="0.5" y="16.5" width="15" height="15" fill="red" stroke="black" />
      <rect x="16.5" y="0.5" width="15" height="15" fill="red" stroke="black" />
    </g>
  ),
  OBlock: ({ offset, rotation }: PieceProps) => (
    <g
      width="32"
      height="32"
      fill="none"
      transform={`translate(${offset.x}, ${offset.y}) rotate(${rotation || 0})`}
    >
      <rect
        x="16.5"
        y="16.5"
        width="15"
        height="15"
        fill="yellow"
        stroke="black"
      />
      <rect
        x="0.5"
        y="16.5"
        width="15"
        height="15"
        fill="yellow"
        stroke="black"
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        fill="yellow"
        stroke="black"
      />
      <rect
        x="16.5"
        y="0.5"
        width="15"
        height="15"
        fill="yellow"
        stroke="black"
      />
    </g>
  ),
  SBlock: ({ offset, rotation }: PieceProps) => {
    if (Math.abs(rotation || 0) === 90) offset.x += 2 * 16;
    return (
      <g
        width="48"
        height="32"
        fill="none"
        transform={`translate(${offset.x}, ${offset.y}) rotate(${
          rotation || 0
        })`}
      >
        <rect
          x="0.5"
          y="16.5"
          width="15"
          height="15"
          fill="red"
          stroke="black"
        />
        <rect
          x="16.5"
          y="16.5"
          width="15"
          height="15"
          fill="red"
          stroke="black"
        />
        <rect
          x="16.5"
          y="0.5"
          width="15"
          height="15"
          fill="red"
          stroke="black"
        />
        <rect
          x="32.5"
          y="0.5"
          width="15"
          height="15"
          fill="red"
          stroke="black"
        />
      </g>
    );
  },
  ZBlock: ({ offset, rotation }: PieceProps) => (
    <g
      width="48"
      height="32"
      fill="none"
      transform={`translate(${offset.x}, ${offset.y}) rotate(${rotation || 0})`}
    >
      <rect
        x="16.5"
        y="16.5"
        width="15"
        height="15"
        fill="lightblue"
        stroke="black"
      />
      <rect
        x="32.5"
        y="16.5"
        width="15"
        height="15"
        fill="lightblue"
        stroke="black"
      />
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        fill="lightblue"
        stroke="black"
      />
      <path d="M16.5 0.5H31.5V15.5H16.5V0.5Z" fill="lightblue" stroke="black" />
    </g>
  ),
};

const letterMap: Record<string, TetrominoData[]> = {
  t: [
    { tetromino: pieceMap.IBlock, rotation: 0, x: 1, y: 2 },
    { tetromino: pieceMap.IBlock, rotation: 0, x: 2, y: 2 },
    { tetromino: pieceMap.OBlock, rotation: 0, x: 0, y: 0 },
    { tetromino: pieceMap.OBlock, rotation: 0, x: 2, y: 0 },
  ],
  r: [
    { tetromino: pieceMap.IBlock, rotation: 0, x: 0, y: 2 },
    { tetromino: pieceMap.SBlock, rotation: 90, x: 2, y: 3 },
    { tetromino: pieceMap.LBlock, rotation: 180, x: 0, y: 0 },
    { tetromino: pieceMap.IBlock, rotation: 0, x: 3, y: 0 },
  ],
  u: [
    { tetromino: pieceMap.OBlock, rotation: 0, x: 0, y: 4 },
    { tetromino: pieceMap.OBlock, rotation: 0, x: 2, y: 4 },
    { tetromino: pieceMap.IBlock, rotation: 0, x: 0, y: 0 },
    { tetromino: pieceMap.IBlock, rotation: 0, x: 3, y: 0 },
  ],
};

const PIECE_DELAY = 500;

export default function Letter({
  letter,
  delay,
}: {
  letter: string;
  delay?: number;
}) {
  const [pieceData] = useState(letterMap[letter.toLowerCase()]);

  useEffect(() => {}, []);

  return (
    <svg
      className="m-2 inline-block"
      xmlns="http://www.w3.org/2000/g"
      viewBox="0 0 64 96"
      style={{ width: 80, height: 120, padding: "5px" }}
    >
      {pieceData.map(({ x, y, tetromino: Piece, rotation }, index) => {
        return (
          <Piece
            key={index}
            offset={{ x: x * 16, y: y * 16 }}
            rotation={rotation}
          />
        );
      })}
    </svg>
  );
}
