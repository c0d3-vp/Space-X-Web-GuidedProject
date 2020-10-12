import React from 'react'
import { render, screen } from '@testing-library/react'
import MissionsList from './MissionsList'

describe('MissionsList tests', () => {
    test('renders without erros', () => {
        render(<MissionsList missions={[]}/>)
    })

    test('renders missions list when new missions are added', () => {
        //renders with no missions
        //no missions are printed to the screen
        //rerenders with 2 missions
        //3 missions are printed to the screen

        const { rerender } = render(<MissionsList missions={[]} />)
        const newMissions = [{mission_name: 'Mission 1'}, {mission_name: 'Mission 2'}]
        expect(screen.queryAllByTestId('mission')).toHaveLenght(0)

        rerender(<MissionsList missions={[newMissions]} />)
        expect(screen.queryAllByTestId('mission')).toHaveLength(2)    
    })
})