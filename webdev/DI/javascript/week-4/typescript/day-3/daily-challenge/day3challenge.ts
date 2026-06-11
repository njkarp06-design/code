function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (let i = 0; i < allowedTypes.length; i++) {
        if (typeof value === allowedTypes[i]) {
            return true
        }
    }
    return false
}

console.log(validateUnionType(42, ["number", "string"]))
console.log(validateUnionType("hello", ["number", "string"]))
console.log(validateUnionType(true, ["number", "string"]))
console.log(validateUnionType(true, ["boolean", "string"]))
console.log(validateUnionType(null, ["number", "string"]))
