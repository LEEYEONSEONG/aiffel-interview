import TextLarge from './components/TextLarge';
import TextLayout from './components/TextLayout';
import TextMedium from './components/TextMedium';
import TextRegular from './components/TextRegular';
import TextSmall from './components/TextSmall';

const Text = Object.assign(TextLayout, {
  Large: TextLarge,
  Regular: TextRegular,
  Medium: TextMedium,
  Small: TextSmall,
});

export default Text;
