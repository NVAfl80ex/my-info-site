import { PomodoroTimer } from '../components/PomodoroTimer';

export default function AppsPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Мои приложения</h2>
      <div className="grid gap-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">⏰ Pomodoro Timer</h3>
          <PomodoroTimer />
        </section>
        <section>
          <ul className="list-disc pl-6 text-gray-700">
            <li>💧 HydrationCalc — калькулятор гидратации</li>
            <li>📏 UnitConverter — конвертер единиц измерения</li>
            <li>🧠 MyPortfolio — личная страница с проектами</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
