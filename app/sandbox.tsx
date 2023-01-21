import { NextPage } from "next";
import { Options, PythonShell } from "python-shell"
const Sandbox: NextPage = () => {
  const option: Options = {
    mode: "text",
    pythonOptions: ["-u"],
    args: []
  }
  PythonShell.runString('dict = {"key": "value"}; print(dict)', option, (err, res)=>{
    console.log("runString")
    if (err) throw err
    console.log(res)
  })
  return(<>
    <h1>Sandbox</h1>
  </>)
}

export default Sandbox