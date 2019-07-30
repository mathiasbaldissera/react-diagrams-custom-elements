import * as React from "react";
import AutosizeInput from 'react-input-autosize';

export interface IEditableSingleFlieldProps {
  beingEdited: boolean;
  content: string;
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onBlurOrEnter: () => void;
  editingKey: string;
  elementKey: string;
  isAbstract?: boolean;
}

export interface IEditableSingleFlieldState {}

interface EditorInterface {
  content: string;
  onChange: () => any;
}
const Editor = ({
  content,
  onChange,
  onBlurOrEnter,
}: {
  content: string;
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onBlurOrEnter: () => void;
}) => {
  return (
    <AutosizeInput
      autoFocus
      inputStyle={{
        padding: 1,
        borderStyle: "dotted",
        borderWidth: 1,
        borderColor: "black"
      }}
      type="text"
      value={content}
      onChange={onChange}
      onBlur={onBlurOrEnter}
      onKeyDown={event => {
        if (event.keyCode === 13) onBlurOrEnter();
      }}
    />
  );
};

export default class EditableSingleFlield extends React.Component<
  IEditableSingleFlieldProps,
  IEditableSingleFlieldState
> {
  constructor(props: IEditableSingleFlieldProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        {this.props.beingEdited &&
        this.props.editingKey === this.props.elementKey ? (
          <Editor
            content={this.props.content}
            onChange={this.props.onChange}
            onBlurOrEnter={this.props.onBlurOrEnter}
          />
        ) : (
          <p
            style={{
              margin: 0,
              padding: 0,
              fontStyle: this.props.isAbstract ? "italic" : "normal"
            }}
          >
            {this.props.content}
          </p>
        )}
      </div>
    );
  }
}
