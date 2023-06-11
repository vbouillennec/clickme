function Counter(props: any) {
	return (
	  <h1 className="text-4xl font-extrabold dark:text-white">{~~props.count}</h1>
	)
}

export default Counter;