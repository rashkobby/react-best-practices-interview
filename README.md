# React Interview Exercise: Messy Todo App

## Scenario

You are joining an existing project that "works" but has clear quality issues.

Your task is to inspect this codebase, identify the problems, and improve it using AI assistance as part of your workflow.

## Goal

Build confidence in your ability to:

- Read unfamiliar React + TypeScript code quickly
- Spot architectural and runtime issues
- Prioritize fixes
- Use AI tools effectively without blindly trusting output
- Explain technical decisions clearly

## App Summary

This is a Todo app with CRUD functionality using browser localStorage.

## Timebox

- Recommended: 60-90 minutes

## Rules

- You may use AI tools (Copilot/ChatGPT/other) throughout the exercise.
- Keep the app behavior functional while refactoring.
- Make incremental, reviewable commits.
- Do not rewrite from scratch unless you can justify why.

## What To Do

1. Run the app and explore behavior.
2. Identify and document problems you find.
3. Fix the codebase step by step.
4. Add tests for the most important behaviors.
5. Improve type safety and data handling.
6. Make sure the app still runs and builds.

## Setup

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Build check:
   - `npm run build`

## Deliverables

Create the following before finishing:

1. A short issue report in your PR description or interview notes including:
   - What you found
   - Why each issue matters
   - Which issues you fixed first and why
2. Refactored code that improves reliability and maintainability
3. Tests covering key CRUD flows and edge cases
4. A brief AI usage log including:
   - Prompts you used (high level)
   - Where AI helped
   - Where you corrected AI output

## Evaluation Criteria

- Correctness of fixes
- Quality of TypeScript usage
- State management decisions
- Data validation and defensive coding
- Test quality and coverage of critical paths
- Ability to communicate tradeoffs
- Effective, critical use of AI

## Suggested Workflow

1. Reproduce bugs first
2. Write/expand types
3. Normalize and validate todo data boundaries
4. Refactor state updates to avoid hidden side effects
5. Add tests around storage + CRUD behavior
6. Run final checks (`npm run build` and test command)

## Discussion Prompts (for debrief)

Be ready to explain:

- What was most risky in the original code and why
- What you deliberately did not fix due to time limits
- How AI accelerated your work
- One AI suggestion you rejected and why

