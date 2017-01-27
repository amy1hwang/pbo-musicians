import { Pipe, PipeTransform } from '@angular/core';
import { Profile } from './profile.model';

@Pipe({
  name: 'instrument',
  pure: false
})

export class InstrumentPipe implements PipeTransform {
  transform(input: Profile[], desiredInstr) {
    var output: Profile[] = [];
    if (desiredInstr === "Violin") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Violin") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Viola") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Viola") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Violoncello") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Violoncello") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Viola da gamba") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Viola da gamba") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Contrabass and Violone") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Contrabass and Violone") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Harpsichord and Organ") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Harpsichord and Organ") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Guitar, Theorbo and Lute") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Guitar, Theorbo and Lute") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Flute") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Flute") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Oboe") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Oboe") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Recorder") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Recorder") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Bassoon") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Bassoon") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Horn") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Horn") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Trumpet") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Trumpet") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInstr === "Timpani and Percussion") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].instrument === "Timpani and Percussion") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
