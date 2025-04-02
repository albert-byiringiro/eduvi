import { LuLoaderCircle } from 'react-icons/lu';
import Button from '../components/common/Button';

function Demo() {
  return (
    <div className="max-w-6xl px-3 mx-auto">
      <h2 className="mb-4 text-xl font-semibold">Button Variants</h2>
      <div className="flex flex-wrap gap-4 my-6">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Disabled State</h2>
      <div className="flex flex-wrap gap-4 my-6">
        <Button disabled>Primary Disabled</Button>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Loading State</h2>
      <div className="flex flex-wrap gap-4 my-6">
        <Button loading>
          <span className="animate-spin">
            <LuLoaderCircle />
          </span>
          Loading...
        </Button>
        <Button variant="secondary" loading>
          <span className="animate-spin">
            <LuLoaderCircle />
          </span>
        </Button>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Custom Styles</h2>

      <div className="flex flex-wrap gap-4 my-6">
        <Button className="bg-green-400 hover:bg-green-500">Success</Button>
        <Button className="bg-red-400 hover:bg-red-500">Dangerous</Button>
        <Button className="text-white bg-purple-400 hover:bg-purple-500">Brand Color</Button>
      </div>
    </div>
  );
}

export default Demo;
