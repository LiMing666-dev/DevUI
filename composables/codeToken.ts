export type TokenType =
    | 'keyword'
    | 'string'
    | 'number'
    | 'comment'
    | 'operator'
    | 'identifier'
    | 'punctuation'
    | 'whitespace'


export interface Token {
    type: TokenType
    value: string
}


const keywords = new Set([
    'const', 'let', 'var',
    'function', 'return',
    'if', 'else', 'for', 'while',
    'class', 'new', 'import', 'export'
])

export function tokenizeJS(code: string): Token[] {
    const tokens: Token[] = []
    let i = 0

    while (i < code.length) {
        const char = code[i]

        // 空白
        if (/\s/.test(char)) {
            let value = char
            i++
            while (/\s/.test(code[i])) value += code[i++]
            tokens.push({ type: 'whitespace', value })
            continue
        }

        // 注释 //
        if (char === '/' && code[i + 1] === '/') {
            let value = '//'
            i += 2
            while (i < code.length && code[i] !== '\n') value += code[i++]
            tokens.push({ type: 'comment', value })
            continue
        }

        // 字符串
        if (char === '"' || char === "'") {
            const quote = char
            let value = char
            i++
            while (i < code.length) {
                value += code[i]
                if (code[i] === quote && code[i - 1] !== '\\') break
                i++
            }
            i++
            tokens.push({ type: 'string', value })
            continue
        }

        // 数字
        if (/\d/.test(char)) {
            let value = char
            i++
            while (/\d/.test(code[i])) value += code[i++]
            tokens.push({ type: 'number', value })
            continue
        }

        // 标识符 / 关键字
        if (/[a-zA-Z_$]/.test(char)) {
            let value = char
            i++
            while (/[a-zA-Z0-9_$]/.test(code[i])) value += code[i++]
            tokens.push({
                type: keywords.has(value) ? 'keyword' : 'identifier',
                value
            })
            continue
        }

        // 运算符 & 标点
        tokens.push({ type: 'operator', value: char })
        i++
    }

    return tokens
}


export function renderTokens(tokens: Token[]): string {
    return tokens.map(t =>
        t.type === 'whitespace'
            ? t.value
            : `<span class="tok-${t.type}">${escapeHtml(t.value)}</span>`
    ).join('')
}


function escapeHtml(str: string) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}