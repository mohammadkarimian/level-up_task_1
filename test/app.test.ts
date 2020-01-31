import Sanitizer from '../src/utils/sanitizer'

describe('Task 1', () => {
    describe('Sanitizer', () => {
        it('remove nothing', () => {
            let sanitizer = new Sanitizer();
            const originalText = 'Hello'
            const expected = 'Hello'
            expect(sanitizer.removeMarkdown(originalText)).toEqual(expected)
        })
        it('remove html', () => {
            let sanitizer = new Sanitizer();
            const originalText = '<dev>Hello</dev>'
            const expected = 'Hello'
            expect(sanitizer.removeMarkdown(originalText)).toEqual(expected)
        })
        it('remove script', () => {
            let sanitizer = new Sanitizer();
            const originalText = '<script>alert("world");</script>'
            const expected = ''
            expect(sanitizer.removeMarkdown(originalText)).toEqual(expected)
        })

        it('remove *', () => {
            let sanitizer = new Sanitizer();
            const originalText = 'Hello*'
            const expected = 'Hello'
            expect(sanitizer.removeBadCharacters(originalText)).toEqual(expected)
        })

        it('remove *&!', () => {
            let sanitizer = new Sanitizer();
            const originalText = 'He!l$lo***'
            const expected = 'Hello'
            expect(sanitizer.removeBadCharacters(originalText)).toEqual(expected)
        })

        it('sanitize 1', () => {
            let sanitizer = new Sanitizer();
            const originalText = '<dev>Hel#lo</dev>\nWorld'
            const expected = 'Hello\nWorld'
            expect(sanitizer.sanitize(originalText)).toEqual(expected)
        })
        it('sanitize 2', () => {
            let sanitizer = new Sanitizer();
            const originalText = 'He!l#lo\nWorld'
            const expected = 'Hello\nWorld'
            expect(sanitizer.sanitize(originalText)).toEqual(expected)
        })
    })
})
