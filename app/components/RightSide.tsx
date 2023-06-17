import { useState } from "react";
import Upgrades from "./Upgrades";

function RightSide(props: any) {
  return (
    <div className="fixed w-200 top-0 right-0 p-6 flex flex-col gap-6">
		<Upgrades count={props.count} 
		upgrades={props.upgrades} 
		activeUpgrade={props.activeUpgrade}
		autoclickPerSecond={props.autoclickPerSecond} />
	</div>
  )
}

export default RightSide;