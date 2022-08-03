import React, { useEffect, useState } from 'react';
import Buttons from './components/Buttons';
import './app.css'
import ShowInput from './components/ShowInput';
import NavTheme from './components/NavTheme';

function App() {

  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState('');
  const [plusEqualer, setPlusEqualer] = useState(0);
  const [numbersSave, setNumbersSave] = useState('')
  const [resultSave, setResultSave] = useState('')
  const [record, setRecord] = useState([])
  const ops = ['/', '*', '+', '-', '.'];

  const handleAddInput = (e) => {
    if (
      ops.includes(e.target.name) && numbers === '' ||
      ops.includes(e.target.name) && ops.includes(numbers.slice(-1))
    ) {
      return;
    }
    setNumbers(numbers.concat(e.target.name));
  }

  const backHandlerRecord = () => {
    setRecord([...record, {
      id: new Date() * 2,
      operation: numbersSave,
      result: resultSave,
    }])
  }

  const handlerAdd = (e) => {
    e.preventDefault()
    handleAddInput(e)
    setPlusEqualer(0)
  }

  useEffect(() => {
    backHandlerRecord()
  }, [numbers])

  const resultTotal = (e) => {
    e.preventDefault()
    try {
      setNumbersSave(numbers)
      setResultSave(eval(numbers).toString())
      if (plusEqualer === 0) {
        setResult(eval(numbers).toString())
        setNumbers('')
        setPlusEqualer(plusEqualer + 1)
      } else if (plusEqualer >= 1) {
        setResult(result * 2)
      }
    } catch {
      setResult('Operacion Invalida')
      setNumbers('')
    }
    console.log(record)

  }

  return (
    <div className="container">
      <form onSubmit={resultTotal}>
        <NavTheme
          record={record}
          numbersSave={numbersSave}
          resultSave={resultSave}
        />
        <ShowInput
          handlerAddBoolean={handlerAdd}
          numbers={numbers}
          result={result}
        />
        <Buttons
          numbers={numbers}
          setNumbers={setNumbers}
          setResult={setResult}
          handlerAddBoolean={handlerAdd}
          resultTotal={resultTotal}
        />
      </form>
    </div>
  );
}

export default App;
