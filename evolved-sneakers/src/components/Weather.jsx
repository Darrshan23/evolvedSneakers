const Weather = ({temperature}) => {
  return (
    <div>
        {
            temperature < 15 
            ? <h2>It's cold outside.</h2>
            : temperature > 25 
            ? <h2>It's hot outside.</h2>
            : <h2>It's nice outside.</h2>
        }       
    </div>
  )
}

export default Weather