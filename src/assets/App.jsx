import { useEffect, useState } from "react"
import Button from "./components/buttons"
import { Container, Content,Row } from "./components/styles/styles"
import Display from "./components/display"

const App =()=> {
  const [titulo,setTitulo]           =  useState("Calculadora");
  const [op,setOp]                   =  useState(1);
  const [nun1,setNun1]               =  useState('');
  const [nun2,setNun2]               =  useState('');
  const [nun3,setNun3]               =  useState(0);
  const [nun4,setNun4]               =  useState(0);
  const [sw,SetWs]                   =  useState(0);
  const [sx,SetSx]                   = useState(0)
  useEffect(()=>{

    let n1 = document.getElementById("id1")
    let n2 = document.getElementById("id2")
    
    n2.innerHTML = nun3
    n1.innerHTML = nun1
    setTitulo("Calculadora "+ nun1)
  },[nun1,nun2,nun3,nun4,setNun1,setNun2,setTitulo])

  const botao =    (x)=>{
    if(op===1 && sx===0){
      setNun1(nun1+x)
      setNun3(parseInt(nun1+x))
      setTitulo("Calculadora "+ nun1+x)
    }
    if(op===2 && sx===0){
      setNun1(nun1+x)
      setNun4(parseInt(nun1+x))
      setTitulo("Calculadora "+ nun1+x)
    }
    
      
  }
  const operacao =(opp)=>{
     switch (opp) {
      case "+":
        
        setNun3(parseInt(nun1))
        setOp(2)
        setNun1('')
        SetWs(1)
        
      break;
      case "-":
        
        setNun3(parseInt(nun1))
        setOp(2)
        setNun1('')
        SetWs(2)
      
      break;
      case "x":
      setNun3(parseInt(nun1))
      setOp(2)
      setNun1('') 
      SetWs(3)  
        
      break;
      case "/":
        setNun3(parseInt(nun1))
        setOp(2)
        setNun1('')
        SetWs(4)
        
      break;
      case "=":
        if(sw===1){
          setNun1(nun3+nun4)
          SetWs(0)
          SetSx(1)
        }
        if(sw===2){
          setNun1(nun3-nun4)
          SetWs(0)
          SetSx(1)
        }
        if(sw===3){
          setNun1(nun3*nun4)
          SetWs(0)
          SetSx(1)
        }
        if(sw===4){
          setNun1(nun3/nun4)
          SetWs(0)
          SetSx(1)
        }
        
         
      break;
      case "C":
        setNun3(0)
        setNun3(0)
        setNun2('')
        setNun1('')
        SetWs(0)
        SetSx(0)
      break;
      
      default:
        break;
     }


    
  }


  return (    
    <Container>
      <title>{titulo}</title>
      <Content>
        <Display />
        
          <Row>
            <Button label={"1"}onClick={()=> botao   ('1')} />
            <Button label={"2"}onClick={()=> botao   ('2')} />
            <Button label={"3"}onClick={()=> botao   ('3')} />
            <Button label={"+"}onClick={()=> operacao('+')} />
          </Row>
          <Row>
            <Button label={"4"}onClick={()=> botao    ('4')} />
            <Button label={"5"}onClick={()=> botao    ('5')} />
            <Button label={"6"}onClick={()=> botao    ('6')} />
            <Button label={"-"}onClick={()=> operacao ('-')} />
          </Row>
          <Row>
            <Button label={"7"}onClick={()=> botao   ('7')} />
            <Button label={"8"}onClick={()=> botao   ('8')} />
            <Button label={"9"}onClick={()=> botao   ('9')} />
            <Button label={"x"}onClick={()=> operacao('x')} />
          </Row>
          <Row>
            <Button label={"0"}onClick={()=> botao      ('0')} />
            <Button label={"="}onClick={()=> operacao   ('=')} />
            <Button label={"C"}onClick={()=> operacao   ('C')} />
            <Button label={"/"}onClick={()=> operacao   ('/')} />
          </Row>
      </Content>
    </Container>
  )
}

export default App
