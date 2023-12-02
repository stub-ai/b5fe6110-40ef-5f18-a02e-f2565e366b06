import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Fetch user data here
  // This is a placeholder and should be replaced with actual logic
  res.status(200).json({
    judicialRecords: [
      { title: 'Record 1', description: 'Description 1' },
      { title: 'Record 2', description: 'Description 2' },
    ],
  });
}