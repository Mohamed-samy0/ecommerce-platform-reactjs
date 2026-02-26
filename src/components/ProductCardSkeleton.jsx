import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col h-full">
            <div className="mb-4">
                <Skeleton height={200} borderRadius={12} />
            </div>

            <div className="mb-3">
                <Skeleton width="30%" height={12} borderRadius={20} />
            </div>

            <div className="mb-2">
                <Skeleton width="80%" height={20} borderRadius={20} />
            </div>
            <div className="mb-4">
                <Skeleton width="50%" height={20} borderRadius={20} />
            </div>

            <div className="mb-6">
                <Skeleton width="25%" height={16} borderRadius={20} />
            </div>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                <Skeleton width={60} height={24} borderRadius={20} />
                    <div className="flex gap-2">
                    <Skeleton circle width={32} height={32} />
                    <Skeleton width={96} height={32} borderRadius={8} />
                </div>
            </div>
        </div>
    );
}