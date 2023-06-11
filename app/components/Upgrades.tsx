function Upgrades(props: any) {


  const displayUpgrades = () => {
    return props.upgrades.map((upgrade: any, index: any) => {
      return (
        (props.count >= upgrade.price) ?
        <div key={index} className="mb-2">
          <button 
            className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 border-b-4 border-orange-900 hover:border-orange-700 rounded w-full text-left"
            onClick={() => props.activeUpgrade(index)}>
            [{upgrade.count}] {upgrade.name}: {upgrade.price}
          </button>
        </div>
        :
        null
      )
    })
  }

  return (
    <>
      {displayUpgrades()}
    </>
  )
}

export default Upgrades;