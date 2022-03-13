export const RoundBar = ({color, width}) => {
    return (
        <div
            style={
                {
                    border: `0.125rem solid ${color}`,
                    height: "0",
                    width: `${width}`,
                    borderRadius: "20rem",
                    display: "inline-block",
                    backgroundColor: "white"
                }
            }/>
    )
}