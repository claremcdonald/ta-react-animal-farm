import './Animal.css';

export default function Animal(props) {
  return <>
    {props.name} {props.type} {props.says}
  </>;
}
