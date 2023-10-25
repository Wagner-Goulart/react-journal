import { render, screen } from "@testing-library/react"
import App from "./App"

/* eslint-disable no-undef */
describe ('jest', ()=>{
    it.skip('Should work', ()=>{
        expect(1).toBe(1)
    })

    it.skip("Should display elements", ()=>{
        render(<App/>)

        screen.debug()
    })
})