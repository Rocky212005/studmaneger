export default function SubjectCard({ subject, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
    >
      <h2 className="text-lg font-semibold text-center">{subject}</h2>
    </div>
  );
}
