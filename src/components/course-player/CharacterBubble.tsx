import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Character, CharacterEvolution } from '@/data/characters';

interface Props {
  character: Character;
  evolution: CharacterEvolution;
  size?: 'sm' | 'md' | 'lg';
  showBio?: boolean;
  message?: string;
  typing?: boolean;
  typingSpeed?: number;
}

export function CharacterBubble({
  character, evolution, size = 'md', showBio = false, message,
  typing = true, typingSpeed = 18,
}: Props) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const initials = character.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  const displayMessage = message || (showBio ? evolution.catchphrase : null);

  const [displayed, setDisplayed] = useState(typing && displayMessage ? '' : displayMessage ?? '');
  useEffect(() => {
    if (!displayMessage) { setDisplayed(''); return; }
    if (!typing) { setDisplayed(displayMessage); return; }
    setDisplayed('');
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplayed(displayMessage.slice(0, i));
      if (i >= displayMessage.length) clearInterval(id);
    }, typingSpeed);
    return () => clearInterval(id);
  }, [displayMessage, typing, typingSpeed]);

  const isTyping = typing && !!displayMessage && displayed.length < displayMessage.length;

  return (
    <div className="flex items-start gap-3">
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className={cn(
          'rounded-full shrink-0 ring-2 ring-background shadow-md overflow-hidden',
          character.color,
          sizeClasses[size],
        )}
        title={character.name}
      >
        <img
          src={character.avatarPath}
          alt={character.name}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add('flex', 'items-center', 'justify-center', 'font-bold', 'text-sm');
              parent.textContent = initials;
            }
          }}
        />
      </motion.div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{character.name}</span>
          <span className="text-xs text-muted-foreground">{character.role}</span>
        </div>
        {displayMessage && (
          <div className="relative mt-1.5 bg-accent/30 border border-accent/40 rounded-xl rounded-tl-sm px-3 py-2">
            <p className="text-sm text-foreground leading-relaxed">
              « {displayed}
              {isTyping && (
                <span className="inline-block w-[2px] h-4 align-middle bg-foreground/60 ml-0.5 animate-pulse" />
              )}
              {!isTyping && ' »'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
