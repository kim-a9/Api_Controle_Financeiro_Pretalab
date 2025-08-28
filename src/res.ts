// curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
//   -H 'Content-Type: application/json' \
//   -H 'X-goog-api-key: AIzaSyCxmj55XYizLZ2lOPvGc4KqIVIAeTGl3nM' \
//   -X POST \
//   -d '{
//     "contents": [
//       {
//         "parts": [
//           {
//             "text": "Explain how AI works in a few words"
//           }
//         ]
//       }
//     ]
//   }'




//  [\x0a{\x0a"text": "Explain how AI works in a few words"\x0a}\x0a]\x0a}\x0a]\x0a}';45e49a66-4e15-4b5e-8225-e77bb3606067{
//   "candidates": [
//     {
//       "content": {
//         "parts": [
//           {
//             "text": "AI learns patterns from data to make predictions or decisions.\n"
//           }
//         ],
//         "role": "model"
//       },
//       "finishReason": "STOP",
//       "avgLogprobs": -0.11032305161158244
//     }
//   ],
//   "usageMetadata": {
//     "promptTokenCount": 8,
//     "candidatesTokenCount": 12,
//     "totalTokenCount": 20,
//     "promptTokensDetails": [
//       {
//         "modality": "TEXT",
//         "tokenCount": 8
//       }
//     ],
//     "candidatesTokensDetails": [
//       {
//         "modality": "TEXT",
//         "tokenCount": 12
//       }
//     ]
//   },
//   "modelVersion": "gemini-2.0-flash",
//   "responseId": "A3mwaMeJKM7jqtsP3rbL6AI"
// }