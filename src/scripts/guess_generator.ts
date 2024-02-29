/* Generate stable random numbers which are index into the birds object */
async function stableStringToNumGenerator(
  str: string,
  modulo: number,
): Promise<number> {
  const msgUint8 = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.reduce((prev, curr) => prev * curr) % modulo;
}

/* Helper to generate today's guesses in a stable manner */
export async function todaysGuesses(todayDateStr: string, numBirds: number) {
  const todaysIndex = await stableStringToNumGenerator(todayDateStr, numBirds);
  console.log(todaysIndex);
  let guesses: number[] = [];
  for (let i = 0; i < 3; ++i) {
    guesses.push((todaysIndex + i + 1) % numBirds);
  }
  const insertionIndex = Math.floor(Math.random() * 4);
  guesses.splice(insertionIndex, 0, todaysIndex);
  return { todaysIndex, guesses };
}
