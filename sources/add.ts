
export function add(...numbers: Array<number>) {
    let total: number = 0
    let current_index: number = 0
    for (; current_index < numbers.length;) {
        let current_number: number = numbers[current_index]
        total += current_number
        current_index += 1
    }
    return total
}
