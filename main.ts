

function drawCard(player: boolean){
    if (player){
        playerHand.push(deck.pop())
    }
    else{
        dealerHand.push(deck.pop())
    }
}

function shuffleDeck() {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
}

function printStatus() {
    console.log(playerHand)
    console.log(dealerHand)
    console.log("Player Score:" + calculateScore(true))
    console.log("Dealer Score:" + calculateScore(false))
}

function calculateScore(player: boolean): number {
    var hasAce: Boolean;
    var score: number = 0;
    var tempHand: String[] = []

    if (player){
        tempHand = playerHand
    }
    else {
        tempHand = dealerHand
    }

    for (let card of tempHand){
        switch (card){
            case "A":
                hasAce = true
                break
            case "K":
            case "Q":
            case "J":
                score += 10
                break
            default:
                score += Number(card)
                break
        }
    }

        if (hasAce) {
            if ((score + 11) > 21)
            {
                score += 1
            }
            else {
                score += 11
            }

    }

    return score
}

function getPlayerMove(): string
{
  var response = "";
  if(calculateScore(playerHand) >= 17)
  {
    response = "S"
  }
  else
  {
    response = "H"
  }
  return response;
}


var deck: string[] = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
var playerHand: Array<string> = new Array()
var dealerHand: Array<string> = new Array()

//main game loop here
initializeDeck()
shuffleDeck()
drawCard(true)
drawCard(true)
drawCard(false)
printStatus()
var keepPlaying = true;
while(keepPlaying)
{
  var playerTurn = true;
  while(playerTurn)
  {
    if(calculateScore(playerHand) <= 21)
    {
      let response = getPlayerMove();
      switch(response)
      {
        case "H": {
          drawCard(true);
          break;
        }
        case "S" {
          playerTurn = false;
          break;
        }
      }
    }

  }
  bool dealerTurn = true;
  while(dealerTurn)
  {
    while(calculateScore(dealerHand) <= 17)
    {
      drawCard(false);
    }
  }
  printStatus();

}
