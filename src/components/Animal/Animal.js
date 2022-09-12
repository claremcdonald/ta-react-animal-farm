import './Animal.css';

export default function Animal(props) {
  return <>
    <div className='animal'>
      <div className='name'>{props.name}</div>
      {props.type} {props.says}
      <img alt={`cartoon of {props.type}`} src={`/animals/${props.type}.svg`} />
    </div> 
  </>;
}
