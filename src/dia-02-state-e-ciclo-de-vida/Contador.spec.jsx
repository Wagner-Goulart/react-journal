/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { Contador } from "./Contador"

describe('<Contador />', ()=>{
    it('Should render', ()=>{
        render(<Contador/>)
<<<<<<< HEAD
=======
        
>>>>>>> 9192b054464e67e23332cf5e739784bf2247e63c
        screen.debug()
    })

})