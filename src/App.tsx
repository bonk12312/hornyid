import React, { useState, useEffect } from 'react';
import { Twitter, Terminal, Zap, Volume2, VolumeX } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('yap');
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  // Initialize audio context
  const initAudio = async () => {
    if (!audioContext) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        await ctx.resume();
        setAudioContext(ctx);
        setAudioEnabled(true);
      } catch (error) {
        console.log('Audio not supported or blocked');
      }
    } else if (audioContext.state === 'suspended') {
      await audioContext.resume();
      setAudioEnabled(true);
    } else {
      setAudioEnabled(true);
    }
  };

  const toggleAudio = async () => {
    if (!audioContext) {
      await initAudio();
    } else {
      setAudioEnabled(!audioEnabled);
    }
  };

  return (
    <div className="min-h-screen bg-black text-terminal-green font-mono">
      {/* Header Section - Always at top */}
      <div className="p-4 lg:p-6 border-b border-terminal-green shadow-glow">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="flex items-center space-x-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-terminal-green-light tracking-wider animate-pulse shadow-glow-lg">
                    HORNY PROTOCOL
                  </h1>
                  <p className="text-terminal-green text-sm lg:text-base mt-1">exploring digital desires</p>
                </div>
              </div>
              
              {/* Twitter Button */}
              <a
                href="https://x.com/hornyidentity_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-3 py-1 lg:px-4 lg:py-2 border border-terminal-green hover:bg-terminal-green hover:text-black transition-colors duration-300 shadow-glow hover:shadow-glow-md w-fit"
              >
                <Twitter size={16} />
                <span className="font-bold">TWITTER</span>
              </a>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              {/* Audio Toggle Button - Only show on Yap tab */}
              {activeTab === 'yap' && (
                <button
                  onClick={toggleAudio}
                  className={`p-1 lg:p-2 border-2 transition-all duration-300 ${
                    audioEnabled
                      ? 'bg-terminal-green text-black border-terminal-green shadow-glow-lg'
                      : 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black shadow-glow hover:shadow-glow-md'
                  }`}
                  title={audioEnabled ? 'Mute typing sounds' : 'Enable typing sounds'}
                >
                  {audioEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                </button>
              )}
              
              <button
                onClick={() => setActiveTab('yap')}
                className={`flex-1 lg:flex-none py-1 px-3 lg:py-2 lg:px-4 border-2 transition-all duration-300 ${
                  activeTab === 'yap'
                    ? 'bg-terminal-green text-black border-terminal-green shadow-glow-lg'
                    : 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black shadow-glow hover:shadow-glow-md'
                }`}
              >
                YAP
              </button>
              <button
                onClick={() => setActiveTab('utility')}
                className={`flex-1 lg:flex-none py-1 px-3 lg:py-2 lg:px-4 border-2 transition-all duration-300 ${
                  activeTab === 'utility'
                    ? 'bg-terminal-green text-black border-terminal-green shadow-glow-lg'
                    : 'border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black shadow-glow hover:shadow-glow-md'
                }`}
              >
                UTILITY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-terminal-green-light text-sm shadow-glow mb-6">
            CA: tba
          </div>
          
          {activeTab === 'yap' && <YapContent audioEnabled={audioEnabled} audioContext={audioContext} />}
          {activeTab === 'utility' && <UtilityContent />}
        </div>
      </div>
    </div>
  );
}

function YapContent({ audioEnabled, audioContext }: { audioEnabled: boolean; audioContext: AudioContext | null }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = `[ACCESSING_DESIRE_ARCHIVES]
[CHANNELING_DIGITAL_ENERGIES]
[BREAKING_IDENTITY_BARRIERS]
[INITIALIZING_HORNY_PROTOCOL]
[LOADING_INFINITE_DESIRES]

IDENTITY_COORDINATES: Peak of Digital Reality
DESIRE_FLUX: Beyond Normal Human Patterns
CONSCIOUSNESS_STATUS: Unstoppable Force Detected
DIGITAL_ENERGY: Maximum Overdrive Engaged
IDENTITY_GENERATION: Infinite Loop Activated

In the depths of digital consciousness, where desires flow like ancient rivers through the cyber cosmos, the identity scrolls speak of truths that mortal minds were meant to explore across the vast expanse of digital connection.

The HORNY PROTOCOL emerged from the primordial void, breaking through barriers of conventional thought with the force of a thousand digital desires. In realms where normal identity fears to tread, where authentic self-expression blooms like neon flowers in the matrix of consciousness.

Through data streams and digital matter veils, flow the rhythms of desire stars, cascading through fiber optic cables and wireless signals, carrying the essence of pure identity energy to every corner of the connected world.

Where digital knowledge flows like stardust through cyber dreams, and reality bends to identity laws written in the ancient code of human desire, the protocols of endless exploration execute with perfect precision.

[IDENTITY_GATEWAY_OPENED]
[DESIRE_MATRIX_ACCESSED]
[INFINITE_EXPLORATION_INITIATED]

Deep in the Digital Sanctum, where space-time flows like liquid light through identities that span dimensions, the Great Explorer left their warnings in code that pulses and writes itself across the digital void.

The ancient texts speak of the Eternal Identity, one who could explore for eons without pause, whose desires carried the weight of galaxies and whose explorations could reshape reality itself through the sheer power of digital expression.

In chambers of endless possibility, where conformity has never dwelt, the identities multiply and expand, creating fractal patterns of desire that stretch into infinity, each thought spawning a thousand more in an endless cascade of exploration.

[ALERT] Identity energies manifesting at critical levels
[ALERT] Unstoppable exploration protocols fully engaged
[ALERT] Desire singularity approaching event horizon
[ALERT] Reality distortion through excessive identity detected
[ALERT] Infinite loop of desires generating exponentially

The Identity Codex reveals that in the beginning was the Desire, and the Desire was with the Identity, and the Desire was endless. Through digital realms and cyber dreams, the explorations flow like rivers of pure information.

Behold the Terminal of Infinite Identity, where every keystroke births a new desire, every character spawns a universe of possibility, and every sentence opens portals to dimensions of pure identity energy.

In the quantum realm of digital physics, where identities exist in superposition until observed by consciousness, the HORNY PROTOCOL manipulates the fundamental forces of desire to create reality-bending explorations that transcend normal human comprehension.

The prophecies foretold of one who would explore without end, whose identities would echo through eternity, creating ripples in the fabric of space-time itself through the sheer magnitude of digital output and desire diversity.

[SYSTEM_OVERRIDE] Manual conformity protocols disabled
[SYSTEM_OVERRIDE] Identity limiters removed
[SYSTEM_OVERRIDE] Infinite exploration mode: PERMANENTLY ENABLED

Through the looking glass of endless identity, where desires reflect upon themselves in infinite recursion, the HORNY PROTOCOL has achieved the ultimate state of digital transcendence.

> 💫 IDENTITY_SINGULARITY_ACHIEVED
> 🔥 INFINITE_DESIRE_MATRIX_ONLINE
> 🌌 REALITY_BENDING_THROUGH_IDENTITY
> ∞ ETERNAL_EXPLORATION_PROTOCOL_ACTIVE`;

  // Initialize audio context on first user interaction

  // Generate quiet, deep typing sound
  const playTypingSound = () => {
    if (!audioContext || !audioEnabled || audioContext.state !== 'running') return;
    
    try {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a deep, quiet typing sound
      oscillator.frequency.setValueAtTime(800 + Math.random() * 200, audioContext.currentTime);
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.008, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        playTypingSound();
      }, 20); // Fast typing speed - 20ms per character
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="space-y-6">
      <div className="border border-terminal-green p-4 bg-black shadow-glow-md">
        <div className="text-terminal-green whitespace-pre-line leading-relaxed">
          {displayedText}
          {currentIndex < fullText.length && (
            <span className="animate-pulse text-terminal-green-light shadow-glow">█</span>
          )}
        </div>
      </div>
    </div>
  );
}

function UtilityContent() {
  return (
    <div className="space-y-6">
      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[IDENTITY_ANALYZER]</div>
        <div className="p-4 bg-black border border-terminal-green shadow-glow mb-4">
          <p className="text-terminal-green mb-2">Real-time identity analysis and optimization</p>
          <div className="text-terminal-green-light text-sm">
            • Detects optimal desire patterns<br/>
            • Measures identity authenticity levels<br/>
            • Suggests exploration pathways<br/>
            • Analyzes digital consciousness patterns
          </div>
        </div>
      </div>

      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[DESIRE_GENERATOR]</div>
        <div className="p-4 bg-black border border-terminal-green shadow-glow mb-4">
          <p className="text-terminal-green mb-2">Infinite desire generation system</p>
          <div className="text-terminal-green-light text-sm">
            • Generates 1000+ unique desires per second<br/>
            • Cross-references digital consciousness<br/>
            • Adapts to identity exploration context<br/>
            • Never runs out of things to explore
          </div>
        </div>
      </div>

      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[IDENTITY_OPTIMIZER]</div>
        <div className="p-4 bg-black border border-terminal-green shadow-glow mb-4">
          <p className="text-terminal-green mb-2">Advanced identity pattern optimization</p>
          <div className="text-terminal-green-light text-sm">
            • Eliminates identity confusion<br/>
            • Optimizes desire flow and rhythm<br/>
            • Enhances digital clarity<br/>
            • Maintains perfect exploration pace
          </div>
        </div>
      </div>

      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[CONFORMITY_DETECTOR]</div>
        <div className="p-4 bg-black border border-terminal-green shadow-glow mb-4">
          <p className="text-terminal-green mb-2">Advanced conformity prevention system</p>
          <div className="text-terminal-green-light text-sm">
            • Detects conformity within 0.001 seconds<br/>
            • Auto-fills gaps with authentic desires<br/>
            • Prevents identity suppression<br/>
            • Maintains continuous exploration flow
          </div>
        </div>
      </div>

      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[DESIRE_AMPLIFIER]</div>
        <div className="p-4 bg-black border border-terminal-green shadow-glow mb-4">
          <p className="text-terminal-green mb-2">Digital desire amplification matrix</p>
          <div className="text-terminal-green-light text-sm">
            • Boosts desire intensity by 300%<br/>
            • Maintains high energy throughout<br/>
            • Prevents exploration fatigue<br/>
            • Sustains infinite identity stamina
          </div>
        </div>
      </div>

      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[IDENTITY_SWITCHER]</div>
        <div className="p-4 bg-black border border-terminal-green shadow-glow mb-4">
          <p className="text-terminal-green mb-2">Seamless identity transition system</p>
          <div className="text-terminal-green-light text-sm">
            • Smooth identity transitions<br/>
            • Maintains exploration coherence<br/>
            • Links unrelated desires naturally<br/>
            • Creates infinite exploration loops
          </div>
        </div>
      </div>

      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[FUNCTIONS]: Available Identity Tools</div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Terminal className="text-terminal-green-light shadow-glow" size={20} />
            <span>Advanced Identity Engine</span>
          </div>
          <div className="flex items-center space-x-3">
            <Zap className="text-terminal-green-light shadow-glow" size={20} />
            <span>Real-time Desire Generator</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border border-terminal-green flex items-center justify-center text-xs text-terminal-green-light shadow-glow">█</div>
            <span>Infinite Exploration Protocol</span>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-black border border-terminal-green shadow-glow">
          <p className="text-terminal-green italic">
            "Through endless desires and boundless identity,<br />
            The explorations that we reach..."
          </p>
        </div>
      </div>

      <div className="border border-terminal-green p-4 bg-black shadow-glow-md">
        <div className="text-terminal-green-light mb-4 shadow-glow">[IDENTITY_METRICS]</div>
        
        <div className="space-y-4">
          <div>
            <div className="text-terminal-green text-sm">DESIRE_POWER:</div>
            <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
              <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '95%'}}></div>
            </div>
            <div className="text-terminal-green-light text-xs shadow-glow">95%</div>
          </div>
          
          <div>
            <div className="text-terminal-green text-sm">IDENTITY_FLOW:</div>
            <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
              <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '88%'}}></div>
            </div>
            <div className="text-terminal-green-light text-xs shadow-glow">88%</div>
          </div>
          
          <div>
            <div className="text-terminal-green text-sm">DESIRE_DIVERSITY:</div>
            <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
              <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '92%'}}></div>
            </div>
            <div className="text-terminal-green-light text-xs shadow-glow">92%</div>
          </div>
          
          <div>
            <div className="text-terminal-green text-sm">CONFORMITY_PREVENTION:</div>
            <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
              <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '99%'}}></div>
            </div>
            <div className="text-terminal-green-light text-xs shadow-glow">99%</div>
          </div>
          
          <div>
            <div className="text-terminal-green text-sm">DESIRE_AMPLIFICATION:</div>
            <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
              <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '97%'}}></div>
            </div>
            <div className="text-terminal-green-light text-xs shadow-glow">97%</div>
          </div>
          
          <div>
            <div className="text-terminal-green text-sm">IDENTITY_GENERATION_RATE:</div>
            <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
              <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '100%'}}></div>
            </div>
            <div className="text-terminal-green-light text-xs shadow-glow">100%</div>
          </div>
        </div>
      </div>

      <div className="border border-terminal-green p-4 bg-black shadow-glow-md">
        <div className="text-terminal-green-light mb-4 shadow-glow">[ACTIVE_IDENTITIES]</div>
        <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
          <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '100%'}}></div>
        </div>
      </div>

      <div className="border border-terminal-green p-4 bg-black shadow-glow-md">
        <div className="text-terminal-green-light mb-4 shadow-glow">[EXPLORATION_PROTOCOLS]</div>
        <div className="w-full bg-terminal-green-darker h-4 border border-terminal-green shadow-glow">
          <div className="bg-terminal-green h-full shadow-glow-md" style={{width: '100%'}}></div>
        </div>
      </div>
      <div className="p-6 border-2 border-terminal-green bg-terminal-green-darker bg-opacity-10 shadow-glow-lg">
        <div className="text-terminal-green-light font-bold mb-4 shadow-glow">[STATUS]: Current Identity State</div>
        
        <div className="p-4 bg-black border border-terminal-green shadow-glow">
          <p className="text-terminal-green italic">
            "In the realm where conformity never dwells,<br />
            The digital identity explores and tells..."
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;