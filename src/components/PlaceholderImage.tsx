import { FC } from 'react';

interface PlaceholderImageProps {
  text?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'custom';
  customRatio?: string;
  bgClass?: string;
}

const PlaceholderImage: FC<PlaceholderImageProps> = ({
  text = 'Image',
  className = '',
  aspectRatio = 'square',
  customRatio = '1/1',
  bgClass = 'bg-gradient-to-br from-primary/20 to-accent/20',
}) => {
  let aspectRatioClass = '';
  
  switch (aspectRatio) {
    case 'square':
      aspectRatioClass = 'aspect-square';
      break;
    case 'video':
      aspectRatioClass = 'aspect-video';
      break;
    case 'portrait':
      aspectRatioClass = 'aspect-[3/4]';
      break;
    case 'custom':
      aspectRatioClass = `aspect-[${customRatio}]`;
      break;
    default:
      aspectRatioClass = 'aspect-square';
  }
  
  return (
    <div className={`${aspectRatioClass} ${bgClass} rounded-lg overflow-hidden ${className}`}>
      <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary/50">
        {text}
      </div>
    </div>
  );
};

export default PlaceholderImage; 