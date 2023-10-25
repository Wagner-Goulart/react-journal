/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { Contador } from "./Contador"

describe('<Contador />', ()=>{
    it('Should render', ()=>{
        render(<Contador/>)
        screen.debug()
    })

})