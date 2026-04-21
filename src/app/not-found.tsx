import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#E8500A] rounded-full opacity-[0.05] blur-[150px]" />

      <div className="relative z-10 text-center max-w-lg">
        <p className="font-display text-[140px] md:text-[200px] text-white/10 leading-none mb-4">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
          Страница не найдена
        </h1>
        <p className="text-white/50 text-base mb-10 leading-relaxed">
          Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/ru" className="btn-primary">
            Вернуться на главную
          </Link>
          <Link
            href="/ru/products"
            className="text-base font-semibold inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white hover:border-white transition-all"
          >
            Смотреть продукцию
          </Link>
        </div>
      </div>
    </div>
  );
}
