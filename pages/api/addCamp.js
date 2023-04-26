// pages/api/saveFormData.js
import fs, {readFile} from 'fs/promises';

export default async function addCamp(req, res) {
    if (req.method === 'POST') {
        try {
            const jsonfile = await readFile('public/db/camp-list.json')
            const jsonArray = jsonfile.length > 0 ? JSON.parse(jsonfile) : [];
            const formData = req.body;
            const jsonString = JSON.stringify(formData, null, 2);
            jsonArray.push(JSON.parse(jsonString))
            await fs.writeFile('public/db/camp-list.json', JSON.stringify(jsonArray));
            res.status(200).json({ message: 'Form data saved successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error saving form data' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
