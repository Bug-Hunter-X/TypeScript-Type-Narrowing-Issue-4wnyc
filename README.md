# TypeScript Type Narrowing Bug

This repository demonstrates an uncommon bug related to type narrowing in TypeScript.  Even with explicit type guards, TypeScript may not fully narrow down the type of a variable, leading to potential runtime errors.  The bug and its solution are provided in separate TypeScript files (bug.ts and bugSolution.ts).

## Bug Description

The `processValue` function attempts to handle both number and string inputs.  A type guard (`typeof value === 'string'`) is used to check the type.  However, even after the check, TypeScript doesn't completely narrow the type of `value` within the `if` block. This is because of a limitation in TypeScript's type inference engine, especially when dealing with complex control flows or union types. The result is that the `parseInt` call is not seen as type-safe by the compiler, even though it should only be called on strings.

## Solution

The bug is resolved by using type assertion or by refactoring the code for better type safety.  See bugSolution.ts for details.