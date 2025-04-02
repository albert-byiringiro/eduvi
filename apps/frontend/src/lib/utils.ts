import clsx, {ClassValue} from 'clsx'
import { twMerge } from 'tailwind-merge'


/**
 * A Utility function that merges Tailwind classes while ensuring
 * user-defined styles override defaults
 */

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}