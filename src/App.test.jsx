import { render, screen } from "@testing-library/react"
import App from "./App"

/* eslint-disable no-undef */
describe ('jest', ()=>{
    it.skip("Should display elements", ()=>{
        render(<App/>)

        screen.debug()
    })
})