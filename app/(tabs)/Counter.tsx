import { Button , Text  , View } from "react-native" ; 

interface iCounter{
    handleIncrement : ()=> void ;
    handleDecrement : ()=> void ; 
    handlePassValue : ()=> void ;
    value : number ;
}


const Counter = ({
    handleIncrement , 
    handleDecrement,
    handlePassValue,
    value 
}: iCounter ) => {
    return <view> 
        <text>{value}</text>
        <Button title = "increment" onPress={handleIncrement}/>
        <Button title ="Decrement" onPress={handleDecrement}/>
        <Button title="Pass Value" onPress={handlePassValue} /> 
    </view>
}

export default Counter;