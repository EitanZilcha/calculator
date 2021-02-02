/**
 * represents any mathematical error
 */
class MathError extends Error{}

/**
 * an error that is thrown when getting a result the calculator can't extend upon
 * after being thrown, the expression will reset
 */
class ContinuityError extends Error{}

export {MathError, ContinuityError}