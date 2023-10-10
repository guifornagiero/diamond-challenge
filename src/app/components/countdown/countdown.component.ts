import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: [ './countdown.component.scss' ]
})
export class CountdownComponent implements OnInit {
  public endOfSeason: number = new Date('Jan 9, 2024 16:00:00').getTime()
  public today: number = new Date().getTime()
  public countdown: string = '00d 00h 00m 00s'

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.today = new Date().getTime()
      let distance: number = this.endOfSeason - this.today

      let days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)))
      let hours = this.formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      let minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      let seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000))

      this.countdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    }, 1000)
  }

  public formatTime(time: number): string | number {
    return (time < 10) ? `0${time}` : time
  }
}
