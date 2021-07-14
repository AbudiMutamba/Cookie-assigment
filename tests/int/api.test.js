test('dummy test', () => {
    let fetch = () =>  {
        return 'Oooops!'
    }

    expect(fetch()).toBe('Oooops!')
})