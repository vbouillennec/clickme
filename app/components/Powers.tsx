function Powers(props: any) {
  const displayPowers = () => {
    return props.powers.map((power: any, index: any) => {
      return (
        (props.count >= power.price) ?
        <div key={index} className="mb-2">
          <button 
            className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-pink-700 rounded w-full text-left"
            onClick={() => props.activePower(index)}>
            [{power.count}] {power.name}: {power.price}
          </button>
        </div>
        :
        null
      )
    })
  }

  return (
    <>
      {displayPowers()}
    </>
  )
}

export default Powers;