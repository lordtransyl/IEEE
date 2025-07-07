import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FiFileText } from 'react-icons/fi';

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [abstracts, setAbstracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate('/login');
        return;
      }

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().isAdmin) {
        setIsAdmin(true);
        const querySnapshot = await getDocs(collection(db, 'abstracts'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAbstracts(data);
        setLoading(false);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 sticky top-0 bg-white py-4 px-6 shadow-md rounded-lg z-10">
        <h1 className="text-3xl font-bold text-blue-800">Admin Dashboard</h1>
      </header>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : abstracts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          No abstracts submitted yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wider">PDF</th>
              </tr>
            </thead>
            <tbody>
              {abstracts.map(({ id, name, email, title, pdfURL }) => (
                <tr
                  key={id}
                  className="border-b even:bg-blue-50 hover:bg-blue-100 transition"
                >
                  <td className="px-6 py-4 text-gray-800">{name}</td>
                  <td className="px-6 py-4 text-gray-700">{email}</td>
                  <td className="px-6 py-4 text-gray-700">{title}</td>
                  <td className="px-6 py-4">
                    <a
                      href={pdfURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                    >
                      <FiFileText size={18} />
                      View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
