import Sanitizer from '../src/utils/sanitizer'

describe('Task 1', () => {
    describe('Sanitizer', () => {
        let sanitizer: Sanitizer

        beforeEach(() => {
            sanitizer = new Sanitizer()
        })

        it('remove nothing', () => {
            const originalText = 'Hello'
            const expected = 'Hello'
            expect(sanitizer.removeMarkdown(originalText)).toEqual(expected)
        })
        it('remove html', () => {
            const originalText = '<dev>Hello</dev>'
            const expected = 'Hello'
            expect(sanitizer.removeMarkdown(originalText)).toEqual(expected)
        })
        it('remove script', () => {
            const originalText = '<script>alert("world");</script>'
            const expected = ''
            expect(sanitizer.removeMarkdown(originalText)).toEqual(expected)
        })

        it('remove *', () => {
            const originalText = 'Hello*'
            const expected = 'Hello'
            expect(sanitizer.removeBadCharacters(originalText)).toEqual(expected)
        })

        it('remove *&!', () => {
            const originalText = 'He!l$lo***'
            const expected = 'Hello'
            expect(sanitizer.removeBadCharacters(originalText)).toEqual(expected)
        })

        it('sanitize 1', () => {
            const originalText = '<dev>Hel#lo</dev>\nWorld'
            const expected = 'Hello\nWorld'
            expect(sanitizer.sanitize(originalText)).toEqual(expected)
        })
        it('sanitize 2', () => {
            const originalText = 'He!l#lo\nWorld'
            const expected = 'Hello\nWorld'
            expect(sanitizer.sanitize(originalText)).toEqual(expected)
        })
    })
})
