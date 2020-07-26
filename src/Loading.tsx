import React from "react";
import Letter from "./Letter";
import "./Loading.css";
interface Props {
  readonly word: string;
}

export default class Loading extends React.PureComponent<Props> {
  public render() {
    const { word } = this.props;
    return (
      <div className="loading-container">
        {/* {word.split("").map((letter) => (
          <Letter letter={letter} />
        ))} */}
        {/* <h1 className="jordan">Jordan</h1> */}
        <Letter letter={"t"} />
      </div>
    );
  }
}
