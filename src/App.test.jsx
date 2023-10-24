import { render, screen } from "@testing-library/react"
import App from "./App"

/* eslint-disable no-undef */
describe ('jest', ()=>{
    it('Should work', ()=>{
        expect(1).toBe(1)
    })

    it("Should display elements", ()=>{
        render(<App/>)

        screen.debug()
    })
})