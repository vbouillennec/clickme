import Powers from "./Powers";

function LeftSide(props: any) {
  return (
    <div className="fixed w-200 bottom-0 left-0 p-6 flex flex-col gap-6">
		<Powers count={props.count} 
		powers={props.powers} 
		activePower={props.activePower}
		clickDamage={props.clickDamage} />
	</div>
  )
}

export default LeftSide;