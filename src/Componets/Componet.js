// rfc

import { connect } from "react-redux"
import { decrement, increment } from './../redux/counter/actions';


function Componet({count, increment, decrement}) {
    
  return (
    <div>
        <div class="bg-white py-11 content-center  my-5 text-white   items-center justify-center shadow mt-4">
          <p id="counter" class="text-bold text-black text-xl">
            {" "}
            {count}
            {" "}
          </p>
          <button
         onClick={increment}
            id="increment"
            class="  my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Increment
          </button>
          <button
          onClick={decrement}
            id="decrement"
            class=" ml-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
          >
            Decrement
          </button>
        </div>
    </div>
  )
}
// ata hight order componet ja akta akta componet k peramitar hisebe nibe & new component return karbe

const mapStateToProps = (state) =>{
  return {
    count: state.value,
  }
}
const  mapDispatchToProps = (dispatch) =>{
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Componet);
