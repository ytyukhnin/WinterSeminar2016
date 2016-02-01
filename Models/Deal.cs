    public struct Deal 
    {
        public string Name;
        public bool State;
        public int Auctions;
        public int Impressions;
        public float Revenue;
        public float AvgClearingCpm;

        public Deal(string name, bool state, int auctions, int impressions, float revenue, float avgClearingCpm) {
            Name = name;
            State = state;
            Auctions = auctions;
            Impressions = impressions;
            Revenue = revenue;
            AvgClearingCpm = avgClearingCpm;
        }

    }