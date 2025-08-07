import Image from 'next/image';

interface TrendCardProps {
  index: number;
}

export default function TrendCard({ index }: TrendCardProps) {
  return (
    <div className="relative w-full h-[150px] rounded-[20px] overflow-hidden bg-transparent">
      <Image
        src="/card-bg.svg"
        alt="Card background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 flex items-center px-8 py-6">
        <div className="w-15 h-15 relative mr-5 flex-shrink-0 -top-4">
          <Image
            src="/place.svg"
            alt="place"
            fill
            className="rounded-full object-cover border-3 border-blue-500"
          />
        </div>

        <div className="flex-1 flex items-start -mt-4 gap-x-13">
          <span className="text-m font-black text-blue-600 uppercase leading-tight">#{index + 1}</span>
          <div className="flex flex-col justify-center">
            <h4 className="text-sm font-bold text-blue-700 uppercase leading-tight mt-2">
              Phường Bàn Cờ
            </h4>
            <p className="text-xs text-blue-500 uppercase">TP.HCM</p>
          </div>
        </div> 
        <div className="text-sm text-blue-600 font-medium ml-auto flex items-center justify-center h-full">
          9km
        </div>
      </div>

    </div>
  );
}
